import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent577Component } from './test-component577.component';

describe('TestComponent577Component', () => {
  let component: TestComponent577Component;
  let fixture: ComponentFixture<TestComponent577Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent577Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
