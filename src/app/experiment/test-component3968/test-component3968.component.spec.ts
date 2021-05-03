import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3968Component } from './test-component3968.component';

describe('TestComponent3968Component', () => {
  let component: TestComponent3968Component;
  let fixture: ComponentFixture<TestComponent3968Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3968Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3968Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
