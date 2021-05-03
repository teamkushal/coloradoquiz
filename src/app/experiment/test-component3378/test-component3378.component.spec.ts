import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3378Component } from './test-component3378.component';

describe('TestComponent3378Component', () => {
  let component: TestComponent3378Component;
  let fixture: ComponentFixture<TestComponent3378Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3378Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3378Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
