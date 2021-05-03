import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent952Component } from './test-component952.component';

describe('TestComponent952Component', () => {
  let component: TestComponent952Component;
  let fixture: ComponentFixture<TestComponent952Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent952Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
