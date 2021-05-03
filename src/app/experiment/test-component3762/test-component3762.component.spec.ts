import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3762Component } from './test-component3762.component';

describe('TestComponent3762Component', () => {
  let component: TestComponent3762Component;
  let fixture: ComponentFixture<TestComponent3762Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3762Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3762Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
