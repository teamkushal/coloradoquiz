import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2577Component } from './test-component2577.component';

describe('TestComponent2577Component', () => {
  let component: TestComponent2577Component;
  let fixture: ComponentFixture<TestComponent2577Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2577Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
