import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3780Component } from './test-component3780.component';

describe('TestComponent3780Component', () => {
  let component: TestComponent3780Component;
  let fixture: ComponentFixture<TestComponent3780Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3780Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
