import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent808Component } from './test-component808.component';

describe('TestComponent808Component', () => {
  let component: TestComponent808Component;
  let fixture: ComponentFixture<TestComponent808Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent808Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent808Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
