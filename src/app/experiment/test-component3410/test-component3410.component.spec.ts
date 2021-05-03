import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3410Component } from './test-component3410.component';

describe('TestComponent3410Component', () => {
  let component: TestComponent3410Component;
  let fixture: ComponentFixture<TestComponent3410Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3410Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
