import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2037Component } from './test-component2037.component';

describe('TestComponent2037Component', () => {
  let component: TestComponent2037Component;
  let fixture: ComponentFixture<TestComponent2037Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2037Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
