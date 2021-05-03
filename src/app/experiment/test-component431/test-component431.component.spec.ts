import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent431Component } from './test-component431.component';

describe('TestComponent431Component', () => {
  let component: TestComponent431Component;
  let fixture: ComponentFixture<TestComponent431Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent431Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent431Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
