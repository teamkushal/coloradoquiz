import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent823Component } from './test-component823.component';

describe('TestComponent823Component', () => {
  let component: TestComponent823Component;
  let fixture: ComponentFixture<TestComponent823Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent823Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
