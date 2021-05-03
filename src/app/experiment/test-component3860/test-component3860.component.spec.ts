import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3860Component } from './test-component3860.component';

describe('TestComponent3860Component', () => {
  let component: TestComponent3860Component;
  let fixture: ComponentFixture<TestComponent3860Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3860Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3860Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
