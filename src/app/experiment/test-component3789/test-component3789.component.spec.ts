import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3789Component } from './test-component3789.component';

describe('TestComponent3789Component', () => {
  let component: TestComponent3789Component;
  let fixture: ComponentFixture<TestComponent3789Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3789Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
