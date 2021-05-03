import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3246Component } from './test-component3246.component';

describe('TestComponent3246Component', () => {
  let component: TestComponent3246Component;
  let fixture: ComponentFixture<TestComponent3246Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3246Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
