import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent514Component } from './test-component514.component';

describe('TestComponent514Component', () => {
  let component: TestComponent514Component;
  let fixture: ComponentFixture<TestComponent514Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent514Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
