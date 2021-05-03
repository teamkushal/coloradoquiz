import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3723Component } from './test-component3723.component';

describe('TestComponent3723Component', () => {
  let component: TestComponent3723Component;
  let fixture: ComponentFixture<TestComponent3723Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3723Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3723Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
