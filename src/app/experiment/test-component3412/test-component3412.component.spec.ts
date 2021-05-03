import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3412Component } from './test-component3412.component';

describe('TestComponent3412Component', () => {
  let component: TestComponent3412Component;
  let fixture: ComponentFixture<TestComponent3412Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3412Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
