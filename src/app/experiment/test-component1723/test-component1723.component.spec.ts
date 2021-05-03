import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1723Component } from './test-component1723.component';

describe('TestComponent1723Component', () => {
  let component: TestComponent1723Component;
  let fixture: ComponentFixture<TestComponent1723Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1723Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
