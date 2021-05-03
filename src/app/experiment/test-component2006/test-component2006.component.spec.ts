import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2006Component } from './test-component2006.component';

describe('TestComponent2006Component', () => {
  let component: TestComponent2006Component;
  let fixture: ComponentFixture<TestComponent2006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2006Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
