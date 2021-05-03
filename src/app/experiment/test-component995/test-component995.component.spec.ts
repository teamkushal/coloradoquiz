import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent995Component } from './test-component995.component';

describe('TestComponent995Component', () => {
  let component: TestComponent995Component;
  let fixture: ComponentFixture<TestComponent995Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent995Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent995Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
