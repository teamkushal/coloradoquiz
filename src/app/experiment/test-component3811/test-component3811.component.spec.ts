import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3811Component } from './test-component3811.component';

describe('TestComponent3811Component', () => {
  let component: TestComponent3811Component;
  let fixture: ComponentFixture<TestComponent3811Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3811Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
