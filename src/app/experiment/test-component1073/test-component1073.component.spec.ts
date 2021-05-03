import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1073Component } from './test-component1073.component';

describe('TestComponent1073Component', () => {
  let component: TestComponent1073Component;
  let fixture: ComponentFixture<TestComponent1073Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1073Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
