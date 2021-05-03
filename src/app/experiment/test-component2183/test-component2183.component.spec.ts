import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2183Component } from './test-component2183.component';

describe('TestComponent2183Component', () => {
  let component: TestComponent2183Component;
  let fixture: ComponentFixture<TestComponent2183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
