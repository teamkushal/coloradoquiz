import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3944Component } from './test-component3944.component';

describe('TestComponent3944Component', () => {
  let component: TestComponent3944Component;
  let fixture: ComponentFixture<TestComponent3944Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3944Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
