import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3170Component } from './test-component3170.component';

describe('TestComponent3170Component', () => {
  let component: TestComponent3170Component;
  let fixture: ComponentFixture<TestComponent3170Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3170Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
