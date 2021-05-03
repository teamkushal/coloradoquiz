import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2417Component } from './test-component2417.component';

describe('TestComponent2417Component', () => {
  let component: TestComponent2417Component;
  let fixture: ComponentFixture<TestComponent2417Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2417Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2417Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
