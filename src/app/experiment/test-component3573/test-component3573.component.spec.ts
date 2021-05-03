import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3573Component } from './test-component3573.component';

describe('TestComponent3573Component', () => {
  let component: TestComponent3573Component;
  let fixture: ComponentFixture<TestComponent3573Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3573Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
