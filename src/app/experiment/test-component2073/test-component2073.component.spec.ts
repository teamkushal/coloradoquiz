import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2073Component } from './test-component2073.component';

describe('TestComponent2073Component', () => {
  let component: TestComponent2073Component;
  let fixture: ComponentFixture<TestComponent2073Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2073Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
