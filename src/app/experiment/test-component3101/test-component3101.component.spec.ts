import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3101Component } from './test-component3101.component';

describe('TestComponent3101Component', () => {
  let component: TestComponent3101Component;
  let fixture: ComponentFixture<TestComponent3101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3101Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
