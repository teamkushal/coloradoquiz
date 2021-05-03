import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2483Component } from './test-component2483.component';

describe('TestComponent2483Component', () => {
  let component: TestComponent2483Component;
  let fixture: ComponentFixture<TestComponent2483Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2483Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2483Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
