import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent50Component } from './test-component50.component';

describe('TestComponent50Component', () => {
  let component: TestComponent50Component;
  let fixture: ComponentFixture<TestComponent50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent50Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
