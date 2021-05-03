import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent636Component } from './test-component636.component';

describe('TestComponent636Component', () => {
  let component: TestComponent636Component;
  let fixture: ComponentFixture<TestComponent636Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent636Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent636Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
