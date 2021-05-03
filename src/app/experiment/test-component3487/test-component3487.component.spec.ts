import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3487Component } from './test-component3487.component';

describe('TestComponent3487Component', () => {
  let component: TestComponent3487Component;
  let fixture: ComponentFixture<TestComponent3487Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3487Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3487Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
