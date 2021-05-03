import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3652Component } from './test-component3652.component';

describe('TestComponent3652Component', () => {
  let component: TestComponent3652Component;
  let fixture: ComponentFixture<TestComponent3652Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3652Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
