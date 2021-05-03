import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent740Component } from './test-component740.component';

describe('TestComponent740Component', () => {
  let component: TestComponent740Component;
  let fixture: ComponentFixture<TestComponent740Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent740Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
