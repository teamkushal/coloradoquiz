import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2444Component } from './test-component2444.component';

describe('TestComponent2444Component', () => {
  let component: TestComponent2444Component;
  let fixture: ComponentFixture<TestComponent2444Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2444Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2444Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
