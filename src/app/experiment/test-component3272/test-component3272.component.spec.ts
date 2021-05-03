import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3272Component } from './test-component3272.component';

describe('TestComponent3272Component', () => {
  let component: TestComponent3272Component;
  let fixture: ComponentFixture<TestComponent3272Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3272Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
