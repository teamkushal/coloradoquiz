import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3740Component } from './test-component3740.component';

describe('TestComponent3740Component', () => {
  let component: TestComponent3740Component;
  let fixture: ComponentFixture<TestComponent3740Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3740Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
