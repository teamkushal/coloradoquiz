import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3728Component } from './test-component3728.component';

describe('TestComponent3728Component', () => {
  let component: TestComponent3728Component;
  let fixture: ComponentFixture<TestComponent3728Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3728Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
