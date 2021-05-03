import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3566Component } from './test-component3566.component';

describe('TestComponent3566Component', () => {
  let component: TestComponent3566Component;
  let fixture: ComponentFixture<TestComponent3566Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3566Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
