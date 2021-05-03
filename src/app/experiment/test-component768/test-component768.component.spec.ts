import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent768Component } from './test-component768.component';

describe('TestComponent768Component', () => {
  let component: TestComponent768Component;
  let fixture: ComponentFixture<TestComponent768Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent768Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
