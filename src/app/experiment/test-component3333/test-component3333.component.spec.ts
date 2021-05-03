import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3333Component } from './test-component3333.component';

describe('TestComponent3333Component', () => {
  let component: TestComponent3333Component;
  let fixture: ComponentFixture<TestComponent3333Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3333Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
