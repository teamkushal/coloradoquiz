import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent350Component } from './test-component350.component';

describe('TestComponent350Component', () => {
  let component: TestComponent350Component;
  let fixture: ComponentFixture<TestComponent350Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent350Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent350Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
