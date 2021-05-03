import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3225Component } from './test-component3225.component';

describe('TestComponent3225Component', () => {
  let component: TestComponent3225Component;
  let fixture: ComponentFixture<TestComponent3225Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3225Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
