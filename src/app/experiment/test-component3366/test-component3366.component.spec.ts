import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3366Component } from './test-component3366.component';

describe('TestComponent3366Component', () => {
  let component: TestComponent3366Component;
  let fixture: ComponentFixture<TestComponent3366Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3366Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
