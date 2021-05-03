import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent697Component } from './test-component697.component';

describe('TestComponent697Component', () => {
  let component: TestComponent697Component;
  let fixture: ComponentFixture<TestComponent697Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent697Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
