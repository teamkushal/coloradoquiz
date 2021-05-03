import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent936Component } from './test-component936.component';

describe('TestComponent936Component', () => {
  let component: TestComponent936Component;
  let fixture: ComponentFixture<TestComponent936Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent936Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
