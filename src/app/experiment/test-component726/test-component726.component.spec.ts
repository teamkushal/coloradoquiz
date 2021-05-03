import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent726Component } from './test-component726.component';

describe('TestComponent726Component', () => {
  let component: TestComponent726Component;
  let fixture: ComponentFixture<TestComponent726Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent726Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent726Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
