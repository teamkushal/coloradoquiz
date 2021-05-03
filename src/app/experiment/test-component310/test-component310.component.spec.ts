import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent310Component } from './test-component310.component';

describe('TestComponent310Component', () => {
  let component: TestComponent310Component;
  let fixture: ComponentFixture<TestComponent310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
