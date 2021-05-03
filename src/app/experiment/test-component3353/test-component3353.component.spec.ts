import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3353Component } from './test-component3353.component';

describe('TestComponent3353Component', () => {
  let component: TestComponent3353Component;
  let fixture: ComponentFixture<TestComponent3353Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3353Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
