import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent573Component } from './test-component573.component';

describe('TestComponent573Component', () => {
  let component: TestComponent573Component;
  let fixture: ComponentFixture<TestComponent573Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent573Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent573Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
