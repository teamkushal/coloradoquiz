import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent723Component } from './test-component723.component';

describe('TestComponent723Component', () => {
  let component: TestComponent723Component;
  let fixture: ComponentFixture<TestComponent723Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent723Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
