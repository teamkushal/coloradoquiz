import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent25Component } from './test-component25.component';

describe('TestComponent25Component', () => {
  let component: TestComponent25Component;
  let fixture: ComponentFixture<TestComponent25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
